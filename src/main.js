var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('play', {
    preload: function() {
    },
    create: function() {

    },
    render: function() {
        game.debug.text('Adventure Awaits!', 250, 290);
    }
});
game.state.start('play');
