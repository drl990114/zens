import type { MenuProps as AkMenuProps } from '@ariakit/react';
import { MenuButton, MenuButtonArrow, MenuItem, MenuProvider } from '@ariakit/react';
import { MenuWrapper } from './MenuWrapper';

export type MenuItemData = {
  label: string;
  keybinding?: string;
  value: string;
  checked?: boolean;
  handler?: () => void;
  children?: MenuItemData[];
};

interface MenuProps extends AkMenuProps {
  triggerBtnClass?: string;
  items: MenuItemData[];
}

const Menu = (props: MenuProps) => {
  const { open, items, triggerBtnClass, style, children, ...rest } = props;

  const renderItems = (menuItems: MenuItemData[]) => {
    return menuItems.map((item) => {
      const key = item.value;

      if (item.children && item.children?.length > 0) {
        return (
          <MenuProvider key={key}>
            <MenuItem className="menu-item" render={<MenuButton />}>
              <div className="menu-item__checkicon" />
              <span className="menu-label">{item.label}</span>
              <MenuButtonArrow />
            </MenuItem>
            <MenuWrapper onClose={rest.onClose}>{renderItems(item.children)}</MenuWrapper>
          </MenuProvider>
        );
      } else {
        return (
          <MenuItem
            key={key}
            className="menu-item"
            onClick={() => {
              if (item.handler) {
                item.handler();
              }
            }}
          >
            <div className="menu-item__checkicon">
              {item.checked ? <i className="ri-check-line" /> : null}
            </div>
            <span className="menu-label">{item.label}</span>
          </MenuItem>
        );
      }
    });
  };

  return (
    <MenuProvider>
      {children ? <MenuButton className={triggerBtnClass}>{children}</MenuButton> : null}
      <MenuWrapper style={style} open={open} {...rest}>
        {renderItems(items)}
      </MenuWrapper>
    </MenuProvider>
  );
};

export default Menu;
