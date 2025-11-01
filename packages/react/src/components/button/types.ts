export type BaseProps = {
  /**
   * ボタンの大きさ
   */
  size?: "sm" | "md" | "lg";
  /**
   * ボタン内に表示する内容
   */
  children?: React.ReactNode;
  /**
   * コンポーネントに適用するクラス名
   */
  className?: string;
  /**
   * `true` のとき、ボタンの `width` を 100% にする。
   */
  wide?: boolean;
  /**
   * ボタンのスタイルの種類
   */
  variant?: Variant;
};

export type Variant = "primary" | "secondary" | "text";
