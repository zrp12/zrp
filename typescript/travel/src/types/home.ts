export type HomeTopBarItem = {
    /** 标题 */
    title: string;
    /** 图标 */
    icon: string;
  }
// js 里面没有 type，ts 里面有type
// 使用ts 关键字 自定义一个类型的约束
// 类型声明区域，以;隔开
export type RecentlyViewItem = {
    title: string;
    cover: string;
    price: number;
}