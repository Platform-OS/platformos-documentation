module.exports = function () {
  return actor({
    checkLiquidErrors() {
      this.dontSee('Liquid Error');
      this.dontSee('RenderFormTag Error');
      this.dontSee('QueryGraphTag Error');
      this.dontSee('translation missing');
    }
  });
  };
