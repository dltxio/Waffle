(function() {
  function toggleTab(selectedTab, tabs) {
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    })
    selectedTab.classList.add('active');
  }

  function showActiveTabContent(selectedTab, tabsContent) {
    tabsContent.forEach(function(content) {
      content.classList.remove('visible');
    })
    var activeContent = document.getElementById(selectedTab.dataset.id);
    activeContent.classList.add('visible');
  }

  function handleTabChange(selectedTab, tabs, tabsContent) {
    toggleTab(selectedTab, tabs);
    showActiveTabContent(selectedTab, tabsContent);
  }
  
  var featuresTabs = document.querySelectorAll('.features-tabs__btn');
  var featuresTabsContent = document.querySelectorAll('.features-tabs__content')

  featuresTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      handleTabChange(this, featuresTabs, featuresTabsContent);
    });
  })

  var guideTabs = document.querySelectorAll('.guide-tabs__btn');
  var guideTabsContent = document.querySelectorAll('.guide-tabs__content')

  guideTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      handleTabChange(this, guideTabs, guideTabsContent);
    });
  })
})();