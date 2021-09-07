module.exports = function() {
  return actor({

    checkLiquidErrors: () => {
      this.dontSee('Liquid Error', 'body');
      this.dontSee('RenderFormTag Error', 'body');
      this.dontSee('QueryGraphTag Error', 'body');
      this.dontSee('translation missing', 'body');
    }

  });
}
