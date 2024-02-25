import { Menu } from 'zens';

export default () => {
  const menuData = [
    {
      label: 'menu1',
      value: 'menu1',
      checked: true,
      handler: () => {
        console.log('menu1');
      },
    },
    {
      label: 'menu2',
      value: 'menu2',
      children: [
        {
          label: 'menu2-1',
          value: 'menu2-1',
        },
        {
          label: 'menu2-2',
          value: 'menu2-2',
        },
      ],
    },
    {
      label: 'menu3',
      value: 'menu3',
    }
  ];

  return (
    <Menu items={menuData}>
      actions
    </Menu>
  );
};
