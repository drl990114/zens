# Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。

## 代码演示

### 基本用法

最简单的下拉菜单。

<code src="./demo/basic.tsx">基本用法</code>

### 触发方式

支持点击、悬停、右键三种触发方式。

<code src="./demo/trigger.tsx">触发方式</code>

### 弹出位置

支持多种弹出位置。

<code src="./demo/button.tsx">弹出位置</code>

## API

### Dropdown

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrow | 下拉框箭头是否显示 | `boolean` \| `{ pointAtCenter: boolean }` | `false` | |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置 | `boolean` | `true` | 5.2.0 |
| autoFocus | 打开后自动聚焦下拉框 | `boolean` | `false` | 4.21.0 |
| disabled | 菜单是否禁用 | `boolean` | - | |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown | `boolean` | `false` | |
| dropdownRender | 自定义下拉框内容 | `(menus: ReactNode) => ReactNode` | - | 4.24.0 |
| getPopupContainer | 菜单渲染父节点 | `(triggerNode: HTMLElement) => HTMLElement` | `() => document.body` | |
| menu | 菜单配置项 | `{ items: DropdownMenuItem[], onClick?: (item: MenuItemType) => void }` | - | 4.24.0 |
| overlayClassName | 下拉根元素的类名称 | `string` | - | |
| overlayStyle | 下拉根元素的样式 | `CSSProperties` | - | |
| placement | 菜单弹出位置 | `bottomLeft` \| `bottomCenter` \| `bottomRight` \| `topLeft` \| `topCenter` \| `topRight` | `bottomLeft` | |
| trigger | 触发下拉的行为 | `Array<click\|hover\|contextMenu>` | `['hover']` | |
| open | 菜单是否显示 | `boolean` | - | 4.23.0 |
| onOpenChange | 菜单显示状态改变时调用 | `(open: boolean, info: { source: 'trigger' \| 'menu' }) => void` | - | |
| buttonsRender | 自定义按钮渲染 | `(buttons: ReactNode[]) => ReactNode[]` | - | |
| loading | 设置按钮载入状态 | `boolean` \| `{ delay: number, icon: ReactNode }` | `false` | |
| danger | 设置危险按钮 | `boolean` | - | 4.23.0 |
| icon | 设置按钮图标 | `ReactNode` | - | |
| size | 设置按钮大小 | `large` \| `medium` \| `small` | `medium` | |
| type | 按钮类型 | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` | |
| onClick | 点击按钮时的回调 | `(event: React.MouseEvent<HTMLElement>) => void` | - | |

### MenuItemType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string` | - |
| label | 菜单项标题 | `ReactNode` | - |
| icon | 菜单项图标 | `ReactNode` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| danger | 是否显示为危险样式 | `boolean` | `false` |
| onClick | 点击回调 | `() => void` | - |
| children | 子菜单项 | `MenuItemType[]` | - |

### DropdownMenuDividerType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 固定为 'divider' | `'divider'` | - |

## 注意事项

- 请确保 `menu.items` 配置正确，否则下拉菜单可能无法正常显示。
- 使用受控模式时，需要通过 `open` 和 `onOpenChange` 来控制下拉菜单的显示状态。

## 类型定义

```typescript
import type { 
  DropdownProps, 
  DropdownPlacement, 
  DropdownTrigger,
  DropdownMenuItem,
  MenuItemType,
  DropdownMenuDividerType 
} from 'zens';

// DropdownPlacement 类型
// 'bottomLeft' | 'bottomCenter' | 'bottomRight' 
// | 'topLeft' | 'topCenter' | 'topRight'
// | 'leftTop' | 'leftCenter' | 'leftBottom'
// | 'rightTop' | 'rightCenter' | 'rightBottom'

// DropdownTrigger 类型
// 'click' | 'hover' | 'contextMenu'
```
