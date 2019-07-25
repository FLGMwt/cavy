export default async spec => {
  spec.describe('App', () => {
    spec.it(
      'only shows class secret text when class button pressed',
      async () => {
        await spec.notExists('ClassText');
        await spec.press('ClassButton');
        await spec.exists('ClassText');
      }
    );
    spec.it(
      'only shows function secret text when function button pressed',
      async () => {
        await spec.notExists('FunctionText');
        await spec.press('FunctionButton');
        await spec.exists('FunctionText');
      }
    );
  });
};
