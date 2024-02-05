export async function wait(ms: number, message: string = "") {
  console.log(message, "waiting", ms, "ms");
  return new Promise((resolve) => setTimeout(resolve, ms));
}
