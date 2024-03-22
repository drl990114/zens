import type { MenuProps as AkMenuProps } from '@ariakit/react';
import { MenuButton, MenuButtonArrow, MenuItem, MenuProvider, useMenuStore } from '@ariakit/react';
import { MenuWrapper } from './MenuWrapper';
import Button from '../Button';

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
  triggerBtnClass?: string;
  items: MenuItemData[];
}

const Menu = (props: MenuProps) => {
  const { open, items, triggerBtnClass, store, style, children, ...rest } = props;

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
            <MenuWrapper>{renderItems(item.children)}</MenuWrapper>
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

  if (store) {
    return (
      <MenuWrapper style={style} store={store} {...rest}>
        {renderItems(items)}
      </MenuWrapper>
    );
  }

  return (
    <MenuProvider>
      {children ? <MenuButton render={p => <Button {...p} />} className={triggerBtnClass}>{children}</MenuButton> : null}
      <MenuWrapper style={style} open={open} {...rest}>
        {renderItems(items)}
      </MenuWrapper>
    </MenuProvider>
  );
};

export default Menu;
