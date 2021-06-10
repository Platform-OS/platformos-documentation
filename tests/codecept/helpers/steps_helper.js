module.exports = function() {
  return actor({

    checkLiquidErrors: () => {
      I.dontSee('Liquid Error', 'body');
      I.dontSee('RenderFormTag Error', 'body');
      I.dontSee('QueryGraphTag Error', 'body');
      I.dontSee('translation missing', 'body');
    }

  });
}
