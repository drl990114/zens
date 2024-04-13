import type { MenuProps as AkMenuProps } from '@ariakit/react';
import { MenuButton, MenuButtonArrow, MenuProvider, useMenuStore } from '@ariakit/react';
import Button from '../Button';
import { MenuItem, MenuItemCheckIcon, MenuWrapper } from './styles';

export { MenuProvider } from '@ariakit/react';
export * from './styles';
export { useMenuStore };

export type MenuItemData = {
  label: string;
  keybinding?: string;
  value: string;
  checked?: boolean;
  handler?: () => void;
  children?: MenuItemData[];
};

interface MenuProps extends AkMenuProps {
  menuButtonProps?: React.ComponentProps<typeof Button>;
  triggerBtnClass?: string;
  items: MenuItemData[];
}

const Menu = (props: MenuProps) => {
  const {
    open,
    items,
    triggerBtnClass,
    store,
    style,
    children,
    menuButtonProps = {},
    ...rest
  } = props;

  const renderItems = (menuItems: MenuItemData[]) => {
    return menuItems.map((item) => {
      const key = item.value;

      if (item.children && item.children?.length > 0) {
        return (
          <MenuProvider key={key}>
            <MenuItem render={<MenuButton />}>
              <MenuItemCheckIcon />
              <span className="menu-label">{item.label}</span>
              <MenuButtonArrow />
            </MenuItem>
            <MenuWrapper>{renderItems(item.children)}</MenuWrapper>
          </MenuProvider>
        );
      } else {
        return (
          <MenuItem
            key={key}
            onClick={() => {
              if (item.handler) {
                item.handler();
              }
            }}
          >
            <MenuItemCheckIcon>
              {item.checked ? <i className="ri-check-line" /> : null}
            </MenuItemCheckIcon>
            <span className="menu-label">{item.label}</span>
          </MenuItem>
        );
      }
    });
  };

  if (store) {
    return (
      <MenuWrapper style={style} store={store} {...rest}>
        {renderItems(items)}
      </MenuWrapper>
    );
  }

  return (
    <MenuProvider>
      {children ? (
        <MenuButton
          render={(p) => <Button {...p} {...menuButtonProps} />}
          className={triggerBtnClass}
        >
          {children}
        </MenuButton>
      ) : null}
      <MenuWrapper style={style} open={open} {...rest}>
        {renderItems(items)}
      </MenuWrapper>
    </MenuProvider>
  );
};

export default Menu;
