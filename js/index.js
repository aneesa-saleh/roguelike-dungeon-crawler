var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
* Dungeons are generated using an external dungeon generator
* link: https://github.com/aneesa-saleh/Roguelike-Dungeon-Generator
* icons from https://icons8.com/
*/

var _ReactBootstrap = ReactBootstrap,
    Modal = _ReactBootstrap.Modal,
    Button = _ReactBootstrap.Button;


var health_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502896135/Game%20icons/icons8-Heart_Outline-48.png',
    diamond_1_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883767/Game%20icons/Diamond_-_level_1.png',
    diamond_2_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883767/Game%20icons/Diamond_-_level_2.png',
    diamond_3_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883767/Game%20icons/Diamond_-_level_3.png',
    diamond_4_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883768/Game%20icons/Diamond_-_level_4.png',
    diamond_5_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883768/Game%20icons/Diamond_-_level_5.png',
    table_knife_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883767/Game%20icons/Table_knife.png',
    army_knife_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883767/Game%20icons/Army_Knife.png',
    sword_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883768/Game%20icons/Sword.png',
    hand_gun_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883768/Game%20icons/Gun.png',
    assault_rifle_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883768/Game%20icons/Assault_Rifle.png',
    rpg_link = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502883768/Game%20icons/RPG.png',
    dungeon_icon = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502977797/Game%20icons/icons8-Block-64.png',
    xp_icon = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1502977801/Game%20icons/icons8-Star_Half_Empty-48.png',
    player_icon = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1503102652/Game%20icons/icons8-Hula_Girl-48.png',
    enemy_icon = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1503100177/Game%20icons/icons8-Stoned_Bat-48.png',
    boss_icon = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1503100177/Game%20icons/icons8-Vampire-48.png',
    health_icon = 'https://res.cloudinary.com/dureqwfrj/image/upload/v1503100177/Game%20icons/icons8-Hyper_Potion-48.png';

var NewGame = function (_React$Component) {
  _inherits(NewGame, _React$Component);

  function NewGame(props) {
    _classCallCheck(this, NewGame);

    return _possibleConstructorReturn(this, (NewGame.__proto__ || Object.getPrototypeOf(NewGame)).call(this, props));
  }

  _createClass(NewGame, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Modal,
        { show: this.props.showModal, backdrop: 'static', keyboard: false },
        React.createElement(
          Modal.Body,
          null,
          React.createElement(
            'p',
            { className: 'modal-text' },
            this.props.message
          )
        ),
        React.createElement(
          Modal.Footer,
          null,
          React.createElement(
            'div',
            { className: 'center-button' },
            React.createElement(
              Button,
              { className: 'new', onClick: this.props.handleNewGame },
              'New Game'
            )
          )
        )
      );
    }
  }]);

  return NewGame;
}(React.Component);

var Block = function (_React$Component2) {
  _inherits(Block, _React$Component2);

  function Block(props) {
    _classCallCheck(this, Block);

    return _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));
  }

  _createClass(Block, [{
    key: 'render',
    value: function render() {
      var blockClass = this.props.type,
          contentClass = '',
          img = void 0;
      var visitedClass = this.props.visited ? '' : 'not-visited';
      var fullClass = 'block ' + blockClass + ' ' + contentClass + ' ' + visitedClass;
      if (this.props.content && this.props.visited) {
        if (this.props.content.type == 'player') {
          img = React.createElement('img', { src: player_icon, className: 'game-play-icon' });
        } else if (this.props.content.type == 'health') {
          img = React.createElement('img', { src: health_icon, className: 'game-play-icon' });
        } else if (this.props.content.type == 'enemy') {
          img = React.createElement('img', { src: enemy_icon, className: 'game-play-icon' });
        } else if (this.props.content.type == 'boss-center') {
          img = React.createElement('img', { src: boss_icon, className: 'boss-icon' });
        } else if (this.props.content.type == 'weapon') {
          switch (this.props.content.value) {
            case 1:
              img = React.createElement('img', { src: army_knife_link, className: 'game-play-icon' });
              break;
            case 2:
              img = React.createElement('img', { src: sword_link, className: 'game-play-icon' });
              break;
            case 3:
              img = React.createElement('img', { src: hand_gun_link, className: 'game-play-icon' });
              break;
            case 4:
              img = React.createElement('img', { src: assault_rifle_link, className: 'game-play-icon' });
              break;
            case 5:
              img = React.createElement('img', { src: rpg_link, className: 'game-play-icon' });
              break;
          }
        }
      }

      return React.createElement(
        'div',
        { className: fullClass },
        img
      );
    }
  }]);

  return Block;
}(React.Component);

var Game = function (_React$Component3) {
  _inherits(Game, _React$Component3);

  function Game(props) {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));
  }

  //this function converts an array of state objects to UI blocks


  _createClass(Game, [{
    key: 'arrayToBlocks',
    value: function arrayToBlocks(array) {
      var blocksArray = [],
          size = this.props.boardSize;
      for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
          blocksArray.push(React.createElement(Block, { type: array[i][j].type, content: array[i][j].content, visited: array[i][j].visited }));
        }
      }
      return blocksArray;
    }
  }, {
    key: 'render',
    value: function render() {
      //convert state to UI

      var blocks = this.arrayToBlocks(this.props.blocksArray),
          weapon_image = void 0,
          weapon_name = void 0,
          diamond_image = void 0,
          nextLevel = this.props.player.level == 5 ? '' : this.props.nextLevelXp[this.props.player.level],
          xpText = this.props.player.level == 5 ? this.props.nextLevelXp[4] + '/' + this.props.nextLevelXp[4] : this.props.player.xp + '/' + nextLevel,
          healthText = this.props.player.health + ' /' + this.props.maxHealth,
          xpWidth = this.props.player.xp / nextLevel * 100 + '',
          healthWidth = this.props.player.health / this.props.maxHealth * 100 + '';

      switch (this.props.player.weapon) {
        case 0:
          weapon_image = table_knife_link;
          weapon_name = "Table Knife";
          break;
        case 1:
          weapon_image = army_knife_link;
          weapon_name = "Army Knife";
          break;
        case 2:
          weapon_image = sword_link;
          weapon_name = "Sword";
          break;
        case 3:
          weapon_image = hand_gun_link;
          weapon_name = "Hand Gun";
          break;
        case 4:
          weapon_image = assault_rifle_link;
          weapon_name = "Assault Rifle";
          break;
        case 5:
          weapon_image = rpg_link;
          weapon_name = "RPG";
          break;
        default:
          weapon_image = table_knife_link;
          weapon_name = "Table Knife";
          break;
      }

      switch (this.props.player.level) {
        case 1:
          diamond_image = diamond_1_link;
          break;
        case 2:
          diamond_image = diamond_2_link;
          break;
        case 3:
          diamond_image = diamond_3_link;
          break;
        case 4:
          diamond_image = diamond_4_link;
          break;
        case 5:
          diamond_image = diamond_5_link;
          break;
        default:
          diamond_image = diamond_1_link;
          break;
      }

      return React.createElement(
        'div',
        { id: 'gamePlay' },
        React.createElement(
          'div',
          { className: 'player-stats' },
          React.createElement(
            'div',
            { className: 'wrap-player-stats' },
            React.createElement('img', { className: 'icon', src: health_link }),
            React.createElement(
              'div',
              { className: 'bar' },
              React.createElement(
                'p',
                { className: 'bar-label' },
                healthText
              ),
              React.createElement('div', { className: 'inner-bar health-bar', style: { width: healthWidth } })
            ),
            React.createElement('img', { className: 'icon', src: xp_icon }),
            React.createElement(
              'div',
              { className: 'bar' },
              React.createElement(
                'p',
                { className: 'bar-label' },
                xpText
              ),
              React.createElement('div', { className: 'inner-bar xp-bar', style: { width: xpWidth } })
            ),
            React.createElement('img', { className: 'icon', src: weapon_image }),
            React.createElement(
              'p',
              { className: 'stats-label' },
              weapon_name
            ),
            React.createElement('img', { className: 'icon', src: diamond_image }),
            React.createElement(
              'p',
              { className: 'stats-label' },
              'Level ' + this.props.player.level
            ),
            React.createElement('img', { className: 'icon', src: dungeon_icon }),
            React.createElement(
              'p',
              { className: 'stats-label' },
              'Dungeon ' + this.props.level
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'game-container' },
          React.createElement(
            'div',
            { className: 'game' },
            blocks
          )
        ),
        React.createElement(
          'div',
          { className: 'game-description' },
          React.createElement(
            'h1',
            null,
            'Roguelike Dungeon Crawler'
          ),
          React.createElement(
            'p',
            null,
            'Defeat the boss in level 5 to win the game.'
          ),
          React.createElement(
            'p',
            null,
            'Defeat all enemies in each level to move to the next level.'
          ),
          React.createElement(
            'p',
            null,
            'Move and interact with elements using your arrow keys.'
          ),
          React.createElement(
            'p',
            null,
            'Have fun!'
          )
        ),
        React.createElement(
          'a',
          { className: 'icons-credit', href: 'https://icons8.com', target: '_blank' },
          'Icons by Icons8'
        ),
        React.createElement(NewGame, { handleNewGame: this.props.newGame, showModal: this.props.showNewGame, message: this.props.message })
      );
    }
  }]);

  return Game;
}(React.Component);

var GameContainer = function (_React$Component4) {
  _inherits(GameContainer, _React$Component4);

  function GameContainer(props) {
    _classCallCheck(this, GameContainer);

    var _this4 = _possibleConstructorReturn(this, (GameContainer.__proto__ || Object.getPrototypeOf(GameContainer)).call(this, props));

    _this4.nextLevelXp = [0, 150, 300, 600, 1200];
    _this4.levelXp = [0, 10, 20, 45, 60, 80];
    _this4.maxHealth = [0, 100, 200, 350, 500, 750];
    _this4.numberOfEnemies = 0;
    _this4.boardSize = 50;
    _this4.playerRoomId = 0;
    _this4.blocksArray = [];
    _this4.rooms = [];
    _this4.bossLocation = {};
    _this4.bossHealth = 0;
    _this4.isGameWon = false;
    _this4.visionSpan = 5;
    var attempts = 1000,
        minRoomSize = 5,
        maxRoomSize = 10,
        i = void 0,
        j = void 0;
    _this4.generateDungeon(attempts, minRoomSize, maxRoomSize);
    var location = _this4.getRandomPlayerLocation(_this4.rooms);
    _this4.blocksArray[location.row][location.col].content = { type: 'player' };

    for (i = 0; i < _this4.visionSpan; i++) {
      if (location.row - _this4.visionSpan + i < 0 || location.row - _this4.visionSpan + i > 49) continue;
      for (j = location.col - (i + 1); j <= location.col + (i + 1); j++) {
        if (j < 0 || j > 49) continue;
        _this4.blocksArray[location.row - _this4.visionSpan + i][j].visited = true;
      }
    }
    i--;
    for (j = location.col - _this4.visionSpan; j <= location.col + _this4.visionSpan; j++) {
      if (j < 0 || j > 49) continue;
      _this4.blocksArray[location.row][j].visited = true;
    }
    for (i = 1; i < _this4.visionSpan; i++) {
      if (location.row + i < 0 || location.row + i > 49) continue;
      for (j = location.col - _this4.visionSpan + i; j <= location.col + _this4.visionSpan - i; j++) {
        if (j < 0 || j > 49) continue;
        _this4.blocksArray[location.row + i][j].visited = true;
      }
    }

    var player = {
      health: 100,
      weapon: 0,
      xp: 0,
      level: 1,
      location: location
    };
    _this4.state = { blocksArray: _this4.blocksArray, player: player, level: 1, showNewGame: false };

    _this4.newGame = _this4.newGame.bind(_this4);
    return _this4;
  }

  _createClass(GameContainer, [{
    key: 'newGamePrompt',
    value: function newGamePrompt() {
      this.setState({ showNewGame: true });
    }
  }, {
    key: 'newGame',
    value: function newGame() {
      this.isGameWon = false;
      this.numberOfEnemies = 0;
      this.playerRoomId = 0;
      this.blocksArray = [];
      this.rooms = [];
      this.bossLocation = {};
      this.bossHealth = 0;
      var attempts = 1000,
          minRoomSize = 6,
          maxRoomSize = 12,
          i = void 0,
          j = void 0;
      this.generateDungeon(attempts, minRoomSize, maxRoomSize);
      var location = this.getRandomPlayerLocation(this.rooms);

      this.blocksArray[location.row][location.col].content = { type: 'player' };
      for (i = 0; i < this.visionSpan; i++) {
        if (location.row - this.visionSpan + i < 0 || location.row - this.visionSpan + i > 49) continue;
        for (j = location.col - (i + 1); j <= location.col + (i + 1); j++) {
          if (j < 0 || j > 49) continue;
          this.blocksArray[location.row - this.visionSpan + i][j].visited = true;
        }
      }
      i--;
      for (j = location.col - this.visionSpan; j <= location.col + this.visionSpan; j++) {
        if (j < 0 || j > 49) continue;
        this.blocksArray[location.row][j].visited = true;
      }
      for (i = 1; i < this.visionSpan; i++) {
        if (location.row + i < 0 || location.row + i > 49) continue;
        for (j = location.col - this.visionSpan + i; j <= location.col + this.visionSpan - i; j++) {
          if (j < 0 || j > 49) continue;
          this.blocksArray[location.row + i][j].visited = true;
        }
      }
      var player = {
        health: 100,
        weapon: 0,
        xp: 0,
        level: 1,
        location: location
      };
      this.populateGame(this.rooms, this.blocksArray, 1);

      var gameScroll = document.querySelector('.game-container');

      if (location.col <= 13) gameScroll.scrollLeft = 0;else gameScroll.scrollLeft = (location.col - 13) * 25;

      if (location.row <= 7) gameScroll.scrollTop = 0;else gameScroll.scrollTop = (location.row - 7) * 25;
      this.setState({ blocksArray: this.blocksArray, player: player, level: 1, showNewGame: false });
    }
  }, {
    key: 'newLevel',
    value: function newLevel() {
      this.numberOfEnemies = 0;
      this.playerRoomId = 0;
      this.blocksArray = [];
      this.rooms = [];
      var attempts = 1000,
          minRoomSize = 6,
          maxRoomSize = 12,
          i = void 0,
          j = void 0;
      this.generateDungeon(attempts, minRoomSize, maxRoomSize);
      var location = this.getRandomPlayerLocation(this.rooms);
      this.blocksArray[location.row][location.col].content = { type: 'player' };
      var player = this.cloneObject(this.state.player);
      player.location = location;

      for (i = 0; i < this.visionSpan; i++) {
        if (location.row - this.visionSpan + i < 0 || location.row - this.visionSpan + i > 49) continue;
        for (j = location.col - (i + 1); j <= location.col + (i + 1); j++) {
          if (j < 0 || j > 49) continue;
          this.blocksArray[location.row - this.visionSpan + i][j].visited = true;
        }
      }
      i--;
      for (j = location.col - this.visionSpan; j <= location.col + this.visionSpan; j++) {
        if (j < 0 || j > 49) continue;
        this.blocksArray[location.row][j].visited = true;
      }
      for (i = 1; i < this.visionSpan; i++) {
        if (location.row + i < 0 || location.row + i > 49) continue;
        for (j = location.col - this.visionSpan + i; j <= location.col + this.visionSpan - i; j++) {
          if (j < 0 || j > 49) continue;
          this.blocksArray[location.row + i][j].visited = true;
        }
      }
      player.health = this.maxHealth[player.level];
      this.populateGame(this.rooms, this.blocksArray, this.state.level + 1);

      var gameScroll = document.querySelector('.game-container');

      if (location.col <= 13) gameScroll.scrollLeft = 0;else gameScroll.scrollLeft = (location.col - 13) * 25;

      if (location.row <= 7) gameScroll.scrollTop = 0;else gameScroll.scrollTop = (location.row - 7) * 27;
      this.setState({ blocksArray: this.blocksArray, player: player, level: this.state.level + 1, showNewGame: false });
    }
  }, {
    key: 'gameWon',
    value: function gameWon() {
      this.isGameWon = true;
      this.setState({ showNewGame: true });
    }
  }, {
    key: 'generateDungeon',
    value: function generateDungeon(attempts, minRoomSize, maxRoomSize) {
      var DungeonGenerator = Dungeon.generator(this.boardSize, attempts, minRoomSize, maxRoomSize);
      this.blocksArray = DungeonGenerator.dungeon;
      this.rooms = DungeonGenerator.rooms;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //handle keyboard movements
      document.onkeydown = function (e) {
        e.preventDefault(); //prevent scrolling of the page
        this.movePlayer(e.keyCode);
      }.bind(this);

      //document.querySelector('.game-container').focus();

      var gameScroll = document.querySelector('.game-container');

      gameScroll.onkeydown = function (e) {
        e.preventDefault();
      }.bind(this);

      this.populateGame(this.rooms, this.state.blocksArray, 1);

      // set scroll position in px
      var playerRow = this.state.player.location.row;
      var playerCol = this.state.player.location.col;

      if (playerCol <= 13) gameScroll.scrollLeft = 0;else gameScroll.scrollLeft = (playerCol - 13) * 25;

      if (playerRow <= 7) gameScroll.scrollTop = 0;else gameScroll.scrollTop = (playerRow - 7) * 25;
    }
  }, {
    key: 'cloneObject',
    value: function cloneObject(object) {
      if (object == null || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) != 'object') return object;
      var clone = {};
      for (var attr in object) {
        if (object.hasOwnProperty(attr)) clone[attr] = object[attr];
      }
      return clone;
    }
  }, {
    key: 'clone2DArray',
    value: function clone2DArray(array) {
      var clone = [];
      for (var _i = 0; _i < array.length; _i++) {
        clone[_i] = array[_i].slice();
      }return clone;
    }
  }, {
    key: 'movePlayer',
    value: function movePlayer(keyCode) {
      var gameScroll = document.querySelector('.game-container');

      var player = this.cloneObject(this.state.player),
          blocksArray = this.clone2DArray(this.state.blocksArray),
          row = void 0,
          col = void 0,
          type = void 0,
          content = void 0,
          isMoved = false,
          i = void 0,
          j = void 0;

      switch (keyCode) {
        case 37:
          //left
          row = player.location.row, col = player.location.col - 1, type = blocksArray[row][col].type, content = blocksArray[row][col].content;
          if (!content && type != 'wall') {
            if (col > 13 && col < 35) {
              gameScroll.scrollLeft -= 25;
              isMoved = true;
            }
          }
          break;
        case 38:
          //up
          row = player.location.row - 1, col = player.location.col, type = blocksArray[row][col].type, content = blocksArray[row][col].content;
          if (!content && type != 'wall') {
            if (row > 7 && row < 41) {
              gameScroll.scrollTop -= 25;
              isMoved = true;
            }
          }
          break;
        case 39:
          //right
          row = player.location.row, col = player.location.col + 1, type = blocksArray[row][col].type, content = blocksArray[row][col].content;
          if (!content && type != 'wall') {
            if (col > 13 && col < 35) {
              gameScroll.scrollLeft += 25;
              isMoved = true;
            }
          }
          break;
        case 40:
          //down
          row = player.location.row + 1, col = player.location.col, type = blocksArray[row][col].type, content = blocksArray[row][col].content;
          if (!content && type != 'wall') {
            if (row > 7 && row < 41) {
              gameScroll.scrollTop += 25;
              isMoved = true;
            }
          }
          break;
        default:
          return;
      }
      //if(isMoved){
      for (i = 0; i < this.visionSpan; i++) {
        if (row - this.visionSpan + i < 0 || row - this.visionSpan + i > 49) continue;
        for (j = col - (i + 1); j <= col + (i + 1); j++) {
          if (j < 0 || j > 49) continue;
          this.blocksArray[row - this.visionSpan + i][j].visited = true;
        }
      }
      i--;
      for (j = col - this.visionSpan; j <= col + this.visionSpan; j++) {
        if (j < 0 || j > 49) continue;
        this.blocksArray[row][j].visited = true;
      }
      for (i = 1; i < this.visionSpan; i++) {
        if (row + i < 0 || row + i > 49) continue;
        for (j = col - this.visionSpan + i; j <= col + this.visionSpan - i; j++) {
          if (j < 0 || j > 49) continue;
          this.blocksArray[row + i][j].visited = true;
        }
      }
      //}

      if (type == 'wall') //move is not possible
        return;else if (content) {
        //interact with content
        //handle content
        if (content.type == 'weapon') {
          player.weapon = content.value;
          blocksArray[row][col].content = null;
          this.setState({ player: player, blocksArray: blocksArray });
        } else if (content.type == 'health') {
          player.health = player.health + content.value > this.maxHealth[player.level] ? this.maxHealth[player.level] : player.health + content.value;
          blocksArray[row][col].content = null;
          this.setState({ player: player, blocksArray: blocksArray });
        } else if (content.type == 'enemy') {
          var enemyAttack = void 0,
              playerAttack = void 0;

          var _getEnemyAttack = this.getEnemyAttack();

          playerAttack = _getEnemyAttack.playerAttack;
          enemyAttack = _getEnemyAttack.enemyAttack;

          var enemyHealth = content.value;
          enemyHealth -= playerAttack;
          if (enemyHealth > 1) {
            player.health -= enemyAttack;
            if (player.health < 1) this.newGamePrompt();else {
              blocksArray[row][col].content.value = enemyHealth;
              this.setState({ player: player, blocksArray: blocksArray });
            }
          } else {
            if (player.level < 5) {
              player.xp += this.levelXp[this.state.level];
              if (player.xp >= this.nextLevelXp[player.level]) {
                player.level += 1;
                player.xp = 0;
              }
            }
            blocksArray[row][col].content = null;
            this.numberOfEnemies--;
            console.log('nEnemies = ' + this.numberOfEnemies);
            if (this.numberOfEnemies == 0) this.newLevel();else this.setState({ player: player, blocksArray: blocksArray });
          }
        } else if (content.type == 'boss') {
          var bossAttack = void 0,
              _playerAttack = void 0;

          var _getBossAttack = this.getBossAttack();

          _playerAttack = _getBossAttack.playerAttack;
          bossAttack = _getBossAttack.bossAttack;

          this.bossHealth -= _playerAttack;
          if (this.bossHealth > 1) {
            player.health -= bossAttack;
            if (player.health < 1) this.newGamePrompt();else this.setState({ player: player });
          } else {
            this.gameWon();
          }
        }
      } else {
        //no content, move player
        //change player location on board to new one
        blocksArray[player.location.row][player.location.col].content = null;
        blocksArray[row][col].content = { type: 'player' };
        //update player location in object
        player.location = { row: row, col: col };
        this.setState({ player: player, blocksArray: blocksArray });
      }
    }

    //get a random row and column to place the player

  }, {
    key: 'getRandomPlayerLocation',
    value: function getRandomPlayerLocation(rooms) {
      //select a random room from the array
      var roomId = Math.floor(Math.random() * rooms.length),
          room = rooms[roomId];
      this.playerRoomId = roomId;
      //set player to the center of the room
      var row = room.row + Math.ceil(room.height / 2) - 1;
      var col = room.col + Math.ceil(room.width / 2) - 1;
      return { row: row, col: col };
    }

    //get a random row and column

  }, {
    key: 'getRandomLocation',
    value: function getRandomLocation(blocksArray, room) {
      //select a random room from the array
      var row = void 0,
          col = void 0;
      var attempts = 1000;
      while (attempts > 0) {
        attempts--;
        row = room.row + 1 + Math.floor(Math.random() * (room.height - 2));
        col = room.col + 1 + Math.floor(Math.random() * (room.width - 2));

        if (blocksArray[row][col].content || blocksArray[row - 1][col - 1].content || blocksArray[row - 1][col].content || blocksArray[row - 1][col + 1].content || blocksArray[row][col - 1].content || blocksArray[row][col + 1].content || blocksArray[row + 1][col - 1].content || blocksArray[row + 1][col].content || blocksArray[row + 1][col + 1].content) continue;else {
          return { row: row, col: col };
        }
      }
      return { row: null, col: null };
    }
  }, {
    key: 'getRandomBossLocation',
    value: function getRandomBossLocation(rooms) {
      var roomId = void 0,
          room = void 0,
          row = void 0,
          col = void 0,
          count = rooms.length;
      while (count > 0) {
        count--;
        roomId = Math.floor(Math.random() * rooms.length);
        room = rooms[roomId];
        if (roomId == this.playerRoomId) continue;
        row = room.row + Math.ceil(room.height / 2) - 1;
        col = room.col + Math.ceil(room.width / 2) - 1;
        return { row: row, col: col };
      }
    }
  }, {
    key: 'generateHealth',
    value: function generateHealth() {
      var level = this.state.level,
          health = void 0;
      switch (level) {
        case 1:
          health = 25 + Math.floor(Math.random() * 11);
          break;
        case 2:
          health = 35 + Math.floor(Math.random() * 11);
          break;
        case 3:
          health = 45 + Math.floor(Math.random() * 11);
          break;
        case 4:
          health = 60 + Math.floor(Math.random() * 11);
          break;
        case 5:
          health = 200 + Math.floor(Math.random() * 51);
          break;
        default:
          return null;
      }
      return health;
    }
  }, {
    key: 'generateEnemy',
    value: function generateEnemy() {
      var level = this.state.level,
          health = null;
      switch (level) {
        case 1:
          health = 30 + Math.floor(Math.random() * 6);
          break;
        case 2:
          health = 50 + Math.floor(Math.random() * 21);
          break;
        case 3:
          health = 70 + Math.floor(Math.random() * 21);
          break;
        case 4:
          health = 100 + Math.floor(Math.random() * 51);
          break;
        case 5:
          health = 200 + Math.floor(Math.random() * 250);
          break;
        default:
          break;
      }
      return health;
    }
  }, {
    key: 'generateBoss',
    value: function generateBoss() {
      var health = 700 + Math.floor(Math.random() * 101);
      return health;
    }
  }, {
    key: 'getEnemyAttack',
    value: function getEnemyAttack() {
      var level = this.state.level,
          player = this.state.player,
          playerAttack = void 0,
          enemyAttack = void 0,
          multiplier = void 0;
      switch (level) {
        case 1:
          enemyAttack = 12 + Math.floor(Math.random() * 6);
          break;
        case 2:
          enemyAttack = 20 + Math.floor(Math.random() * 6);
          break;
        case 3:
          enemyAttack = 27 + Math.floor(Math.random() * 6);
          break;
        case 4:
          enemyAttack = 33 + Math.floor(Math.random() * 6);
          break;
        case 5:
          enemyAttack = 40 + Math.floor(Math.random() * 6);
          break;
        default:
          break;
      }

      switch (player.weapon) {
        case 0:
          playerAttack = 10 + Math.floor(Math.random() * 6);
          break;
        case 1:
          playerAttack = 15 + Math.floor(Math.random() * 6);
          break;
        case 2:
          playerAttack = 22 + Math.floor(Math.random() * 6);
          break;
        case 3:
          playerAttack = 30 + Math.floor(Math.random() * 6);
          break;
        case 4:
          playerAttack = 38 + Math.floor(Math.random() * 6);
          break;
        case 5:
          playerAttack = 50 + Math.floor(Math.random() * 6);
          break;
        default:
          break;
      }

      switch (player.level) {
        case 1:
          multiplier = 1;
          break;
        case 2:
          multiplier = 1.15;
          break;
        case 3:
          multiplier = 1.25;
          break;
        case 4:
          multiplier = 1.35;
          break;
        case 5:
          multiplier = 1.5;
          break;
        default:
          break;
      }
      playerAttack *= multiplier;
      playerAttack = Math.ceil(playerAttack);
      return { playerAttack: playerAttack, enemyAttack: enemyAttack };
    }
  }, {
    key: 'getBossAttack',
    value: function getBossAttack() {
      var player = this.state.player,
          playerAttack = void 0,
          bossAttack = void 0,
          multiplier = void 0;

      bossAttack = 100 + Math.floor(Math.random() * 101);

      switch (player.weapon) {
        case 0:
          playerAttack = 10 + Math.floor(Math.random() * 6);
          break;
        case 1:
          playerAttack = 15 + Math.floor(Math.random() * 6);
          break;
        case 2:
          playerAttack = 20 + Math.floor(Math.random() * 6);
          break;
        case 3:
          playerAttack = 25 + Math.floor(Math.random() * 6);
          break;
        case 4:
          playerAttack = 30 + Math.floor(Math.random() * 6);
          break;
        case 5:
          playerAttack = 35 + Math.floor(Math.random() * 16);
          break;
        default:
          break;
      }

      switch (player.level) {
        case 1:
          multiplier = 1;
          break;
        case 2:
          multiplier = 1.15;
          break;
        case 3:
          multiplier = 1.25;
          break;
        case 4:
          multiplier = 1.35;
          break;
        case 5:
          multiplier = 1.5;
          break;
        default:
          break;
      }
      playerAttack *= multiplier;
      playerAttack = Math.ceil(playerAttack);
      return { playerAttack: playerAttack, bossAttack: bossAttack };
    }

    //add items and enemies to the map

  }, {
    key: 'populateGame',
    value: function populateGame(rooms, blocks, level) {
      var enemyHealth = void 0,
          health = void 0,
          location = void 0,
          row = void 0,
          col = void 0,
          shouldGenerate = void 0,
          i = void 0,
          j = void 0;
      var blocksArray = this.clone2DArray(blocks);
      this.numberOfEnemies = 0;

      if (level == 5) {
        this.bossHealth = this.generateBoss();

        var _getRandomBossLocatio = this.getRandomBossLocation(rooms);

        row = _getRandomBossLocatio.row;
        col = _getRandomBossLocatio.col;

        for (i = row - 1; i <= row + 1; i++) {
          for (j = col - 1; j <= col + 1; j++) {
            if (i == row && j == col) blocksArray[i][j].content = { type: 'boss-center' };else blocksArray[i][j].content = { type: 'boss' };
          }
        }
        this.bossLocation = { row: row, col: col };
      }

      for (i = 0; i < rooms.length; i++) {
        var _getRandomLocation = this.getRandomLocation(blocksArray, rooms[i]);

        row = _getRandomLocation.row;
        col = _getRandomLocation.col;

        if (typeof row == 'number') {
          this.numberOfEnemies++;
          enemyHealth = this.generateEnemy();
          blocksArray[row][col].content = { type: 'enemy', value: enemyHealth };
        }
        shouldGenerate = Math.floor(Math.random() * 10);
        if (shouldGenerate < 8) {
          var _getRandomLocation2 = this.getRandomLocation(blocksArray, rooms[i]);

          row = _getRandomLocation2.row;
          col = _getRandomLocation2.col;

          if (typeof row == 'number') {
            health = this.generateHealth();
            blocksArray[row][col].content = { type: 'health', value: health };
          }
        }
        shouldGenerate = Math.floor(Math.random() * 10);
        if (shouldGenerate < 1) {
          var _getRandomLocation3 = this.getRandomLocation(blocksArray, rooms[i]);

          row = _getRandomLocation3.row;
          col = _getRandomLocation3.col;

          if (typeof row == 'number') {
            this.numberOfEnemies++;
            enemyHealth = this.generateEnemy();
            blocksArray[row][col].content = { type: 'enemy', value: enemyHealth };
          }
        }
      }
      var count = rooms.length;
      while (count > 0) {
        count--;
        var room = rooms[Math.floor(Math.random() * rooms.length)];

        var _getRandomLocation4 = this.getRandomLocation(blocksArray, room);

        row = _getRandomLocation4.row;
        col = _getRandomLocation4.col;

        if (typeof row != 'number') continue;else {
          blocksArray[row][col].content = { type: 'weapon', value: level };
          break;
        }
      }

      this.setState({ blocksArray: blocksArray });
    }
  }, {
    key: 'render',
    value: function render() {
      var newGameMessage = this.isGameWon ? "Congratulations!! You've won the game." : "Your warrior has fallen.";
      return React.createElement(Game, { player: this.state.player, blocksArray: this.state.blocksArray, boardSize: this.boardSize, nextLevelXp: this.nextLevelXp, level: this.state.level, maxHealth: this.maxHealth[this.state.player.level], newGame: this.newGame, showNewGame: this.state.showNewGame, message: newGameMessage });
    }
  }]);

  return GameContainer;
}(React.Component);

ReactDOM.render(React.createElement(GameContainer, null), document.getElementById('root'));