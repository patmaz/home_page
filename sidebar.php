<nav id="navbar" ng-controller="mainViewController">
    <ul class="links">
        <li class="links-item"><a href="#/">portfolio</a></li>
        <li class="links-item" ng-repeat="page in pages"><a ng-href="#/page/{{ page.slug }}">{{ page.title }}</a> </li>
    </ul>
    
</nav>