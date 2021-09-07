const { I } = inject();

module.exports = function() {
  return actor({

    checkLiquidErrors: function() {
      I.dontSee('Liquid Error', 'body');
      I.dontSee('RenderFormTag Error', 'body');
      I.dontSee('QueryGraphTag Error', 'body');
      I.dontSee('translation missing', 'body');
    }

  });
}
