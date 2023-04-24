export const delay = async (ms: number): Promise<string> => {
  return new Promise((res) => {
    setTimeout(() => res('aboba'), ms);
  });
};
