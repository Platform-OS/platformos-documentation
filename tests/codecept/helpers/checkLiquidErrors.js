const { I } = inject();

module.exports = function() {
  return actor({

    checkLiquidErrors: function() {
      I.dontSee('Liquid Error');
      I.dontSee('RenderFormTag Error');
      I.dontSee('QueryGraphTag Error');
      I.dontSee('translation missing');
    }

  });
}
