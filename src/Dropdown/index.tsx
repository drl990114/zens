import type { MenuProps as AkMenuProps } from '@ariakit/react';
import { MenuButton, MenuProvider, useMenuStore } from '@ariakit/react';
import { useEffect, useMemo, useRef } from 'react';
import { Box } from '../Box';
import Button from '../Button';
import { MenuItem, MenuSeparator, MenuWrapper } from '../Menu/styles';
import {
  DropdownArrow,
  DropdownButtonWrapper,
  DropdownWrapper,
} from './styles';

export type DropdownPlacement =
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'leftTop'
  | 'leftCenter'
  | 'leftBottom'
  | 'rightTop'
  | 'rightCenter'
  | 'rightBottom';

export type DropdownTrigger = 'click' | 'hover' | 'contextMenu';

export interface MenuItemType {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
  onClick?: () => void;
  children?: MenuItemType[];
}

export interface DropdownMenuDividerType {
  type: 'divider';
}

export type DropdownMenuItem = MenuItemType | DropdownMenuDividerType;

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
  onClick?: (item: MenuItemType) => void;
}

export interface DropdownProps extends Omit<AkMenuProps, 'placement'> {
  /**
   * 菜单配置项
   */
  menu?: DropdownMenuProps;
  /**
   * 是否显示箭头
   * @default false
   */
  arrow?: boolean | { pointAtCenter: boolean };
  /**
   * 是否自动调整位置
   * @default true
   */
  autoAdjustOverflow?: boolean;
  /**
   * 是否自动聚焦
   * @default false
   */
  autoFocus?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 隐藏时是否销毁弹出层
   * @default false
   */
  destroyPopupOnHide?: boolean;
  /**
   * 自定义下拉框渲染
   */
  dropdownRender?: (menus: React.ReactNode) => React.ReactNode;
  /**
   * 弹出层挂载容器
   * @default () => document.body
   */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  /**
   * 下拉框类名
   */
  overlayClassName?: string;
  /**
   * 下拉框样式
   */
  overlayStyle?: React.CSSProperties;
  /**
   * 弹出位置
   * @default 'bottomLeft'
   */
  placement?: DropdownPlacement;
  /**
   * 触发方式
   * @default ['hover']
   */
  trigger?: DropdownTrigger[];
  /**
   * 是否打开（受控）
   */
  open?: boolean;
  /**
   * 展开状态变化回调
   */
  onOpenChange?: (open: boolean, info?: { source: 'trigger' | 'menu' }) => void;
  /**
   * 按钮渲染器
   */
  buttonsRender?: (buttons: React.ReactNode[]) => React.ReactNode[];
  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean | { delay: number; icon?: React.ReactNode };
  /**
   * 是否为危险按钮
   * @default false
   */
  danger?: boolean;
  /**
   * 按钮图标
   */
  icon?: React.ReactNode;
  /**
   * 按钮尺寸
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * 按钮点击回调
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * 子元素（通常是按钮文字）
   */
  children?: React.ReactNode;
  /**
   * 自定义触发元素
   */
  customTrigger?: React.ReactNode;
}

const isDivider = (item: DropdownMenuItem): item is DropdownMenuDividerType => {
  return (item as DropdownMenuDividerType)?.type === 'divider';
};

const placementMap: Record<DropdownPlacement, string> = {
  bottomLeft: 'bottom-start',
  bottomCenter: 'bottom',
  bottomRight: 'bottom-end',
  topLeft: 'top-start',
  topCenter: 'top',
  topRight: 'top-end',
  leftTop: 'left-start',
  leftCenter: 'left',
  leftBottom: 'left-end',
  rightTop: 'right-start',
  rightCenter: 'right',
  rightBottom: 'right-end',
};

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    arrow = false,
    autoAdjustOverflow = true,
    autoFocus = false,
    disabled = false,
    destroyPopupOnHide = false,
    dropdownRender,
    getPopupContainer,
    overlayClassName,
    overlayStyle,
    placement = 'bottomLeft',
    trigger = ['hover'],
    open: controlledOpen,
    onOpenChange,
    buttonsRender,
    loading = false,
    danger = false,
    icon,
    size = 'medium',
    type = 'default',
    onClick,
    children,
    customTrigger,
    menu,
    ...rest
  } = props;

  const triggerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const store = useMenuStore({
    placement: placementMap[placement] as any,
    focusLoop: false,
    focusWrap: false,
  });

  const isOpen = controlledOpen !== undefined ? controlledOpen : store.useState('open');

  useEffect(() => {
    if (controlledOpen !== undefined) {
      store.setOpen(controlledOpen);
    }
  }, [controlledOpen, store]);

  const handleOpenChange = (open: boolean) => {
    if (controlledOpen === undefined) {
      store.setOpen(open);
    }
    onOpenChange?.(open, { source: 'trigger' });
  };

  // 处理点击触发
  const handleClick = () => {
    if (trigger.includes('click')) {
      handleOpenChange(!isOpen);
    }
    // 调用原始的 onClick
    onClick?.(undefined as any);
  };

  // 处理右键菜单触发
  const handleContextMenu = (e: React.MouseEvent) => {
    if (trigger.includes('contextMenu')) {
      e.preventDefault();
      handleOpenChange(!isOpen);
    }
  };

  // 处理鼠标进入（hover 触发）
  const handleMouseEnter = () => {
    if (trigger.includes('hover')) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      handleOpenChange(true);
    }
  };

  // 处理鼠标离开（hover 触发）
  const handleMouseLeave = () => {
    if (trigger.includes('hover')) {
      hoverTimeoutRef.current = setTimeout(() => {
        handleOpenChange(false);
      }, 100);
    }
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const showArrow = typeof arrow === 'boolean' ? arrow : true;

  // 判断是否使用点击触发 - 如果是，禁用 MenuButton 的默认行为
  const useClickTrigger = trigger.includes('click');
  const useHoverTrigger = trigger.includes('hover');
  const useContextMenuTrigger = trigger.includes('contextMenu');

  const buttonContent = customTrigger ? (
    <Box 
      ref={triggerRef}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      {customTrigger}
    </Box>
  ) : (
    <DropdownButtonWrapper
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MenuButton
        render={
          <Button
            size={size}
            btnType={type === 'default' ? 'default' : type}
            danger={danger}
            loading={loading}
            disabled={disabled}
            onClick={handleClick}
            onContextMenu={handleContextMenu}
          />
        }
        // 如果使用 click 触发，禁用 MenuButton 的默认点击行为
        toggleOnClick={useClickTrigger ? false : undefined}
      >
        {icon && <span className="dropdown-icon">{icon}</span>}
        {children && <span className="dropdown-text">{children}</span>}
        {showArrow && (
          <DropdownArrow className="dropdown-arrow">
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              data-icon="down"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.7 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.3c3.2 4.4 9.7 4.4 12.9 0l352.6-486.3c3.9-5.3.1-12.7-6.4-12.7z" />
            </svg>
          </DropdownArrow>
        )}
      </MenuButton>
    </DropdownButtonWrapper>
  );

  const finalButtons = buttonsRender ? buttonsRender([buttonContent]) : [buttonContent];

  // 渲染菜单项
  const renderMenuItems = (items: DropdownMenuItem[]) => {
    return items.map((item, index) => {
      if (isDivider(item)) {
        return <MenuSeparator key={`divider-${index}`} />;
      }

      const { key, label, icon, disabled: itemDisabled, danger, onClick: itemOnClick } = item;

      const handleItemClick = () => {
        if (!itemDisabled) {
          itemOnClick?.();
          menu?.onClick?.(item);
          // 点击菜单项后关闭下拉菜单
          handleOpenChange(false);
        }
      };

      return (
        <MenuItem
          key={key}
          disabled={itemDisabled}
          onClick={handleItemClick}
          data-danger={danger}
        >
          {icon && <span className="dropdown-menu-item-icon">{icon}</span>}
          <span className="dropdown-menu-item-label">{label}</span>
        </MenuItem>
      );
    });
  };

  const menuContent = menu?.items ? (
    <MenuWrapper
      store={store}
      className={overlayClassName}
      style={overlayStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {renderMenuItems(menu.items)}
    </MenuWrapper>
  ) : null;

  const content = dropdownRender ? dropdownRender(menuContent) : menuContent;

  if (destroyPopupOnHide && !isOpen) {
    return (
      <DropdownWrapper>
        {finalButtons[0]}
      </DropdownWrapper>
    );
  }

  return (
    <DropdownWrapper>
      <MenuProvider store={store}>
        {finalButtons[0]}
        {content}
      </MenuProvider>
    </DropdownWrapper>
  );
};

export default Dropdown;
