$hamburger = $('.menu__hamburger');
$menu = $('.menu');
$menuSidebar = $('.menu__sidebar');
$menuContent = $('.menu__content');
$menuItems = $('.menu__item');

function switchState() {
  $menu.toggleClass('is-active');
  $hamburger.toggleClass('is-active');
}

var barsInSequence = [{
    e: $menuSidebar,
    p: {
      translateX: '-100%'
    },
    o: {
      duration: 200
    }
  }, {
    e: $menuSidebar,
    p: {
      translateX: '0%'
    },
    o: {
      duration: 200
    }
  }, {
    e: $menuContent,
    p: {
      translateX: '0%'
    },
    o: {
      duration: 200,
      sequenceQueue: false,
    },

  }, {
    e: $menuItems,
    p: 'transition.slideLeftIn',
    o: {

      duration: 150,
      stagger: 100,
      begin: switchState,
    },

  }

];

var barsOutSequence = [{
  e: $($($menuItems).get().reverse()),
  p: 'transition.slideLeftOut',
  o: {
    display: "block",
    duration: 150,
    stagger: 100,
  }

}, {
  e: $menuContent,
  p: {
    translateX: '-100%'
  },
  o: {
    duration: 200,

  },

}, {
  e: $menuSidebar,
  p: {
    translateX: '-100%'
  },
  o: {
    duration: 200,
    sequenceQueue: false,
  },

}, {
  e: $menuSidebar,
  p: {
    translateX: '0%'
  },
  o: {
    duration: 200,
    begin: switchState,
  }
}, ];

function runBarsInSequence() {
  $.Velocity.RunSequence(barsInSequence);
}

function runBarsOutSequence() {
  $.Velocity.RunSequence(barsOutSequence);
}

function initialize() {

  $menuItems.velocity({
    opacity: 0,
    translateX: '-30px'
  }, {
    duration: 0
  })
  $menuContent.velocity({
    translateX: '-100%'
  }, {
    duration: 0
  });
  $hamburger.click(function() {
    if ($menu.hasClass('is-active')) {
      runBarsOutSequence();
    } else {
      runBarsInSequence();
    }
  })
}

initialize();