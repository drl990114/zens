import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'zens';

const items = [
  {
    key: '1',
    label: '1st menu item',
  },
  {
    key: '2',
    label: '2nd menu item',
  },
  {
    key: '3',
    label: '3rd menu item',
  },
];

export default () => {
  return (
    <Space>
      <Dropdown
        menu={{
          items,
          onClick: (item) => {
            console.log('click', item);
          },
        }}
      >
        <span>
          Hover me <DownOutlined />
        </span>
      </Dropdown>
    </Space>
  );
};
