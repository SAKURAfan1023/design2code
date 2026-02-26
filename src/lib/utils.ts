/**
 * 获取带 basePath 的资源路径
 * 用于静态导出时正确处理图片等资源路径
 */
const basePath = '/design2code';

export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}
