import type { PropsWithChildren } from "react";
import { createContext, useContext } from "react";

/**
 * ChihayaUI のグローバル設定
 */
export interface ChihayaUIConfig {
  /**
   * テーマモード
   */
  theme?: "light" | "dark";
  /**
   * アニメーションをグローバルに無効化
   */
  disableAnimation?: boolean;
  /**
   * カスタムクラス名プレフィックス
   */
  classNamePrefix?: string;
}

const ChihayaUIContext = createContext<ChihayaUIConfig>({});

export interface ChihayaUIProviderProps extends PropsWithChildren {
  /**
   * ChihayaUI の設定
   */
  config?: ChihayaUIConfig;
}

/**
 * ChihayaUI のグローバル設定を提供するプロバイダー
 */
export const ChihayaUIProvider = ({
  children,
  config = {},
}: ChihayaUIProviderProps) => {
  return (
    <ChihayaUIContext.Provider value={config}>
      {children}
    </ChihayaUIContext.Provider>
  );
};

/**
 * ChihayaUI の設定にアクセスするためのフック
 * @returns ChihayaUI の設定オブジェクト
 */
export const useChihayaUIProvider = (): ChihayaUIConfig => {
  const context = useContext(ChihayaUIContext);
  return context;
};
