<div id="menu-icon">
    <span class="genericon genericon-menu"></span>
</div>
<nav id="navbar" ng-controller="mainViewController">
    <ul class="links">
        <li><a class="links-item" href="#/">portfolio</a></li>
        <li ng-repeat="page in pages"><a class="links-item" ng-href="#/page/{{ page.slug }}">{{ page.title }}</a> </li>
        <li class="links-item"><span class="genericon genericon-github font-size-5"></span></li>
        <li class="links-item"><span class="genericon genericon-linkedin-alt font-size-5"></span></li>
    </ul>
    <span id="close-icon" class="genericon genericon-close-alt font-size-5 center-down"></span>
</nav>