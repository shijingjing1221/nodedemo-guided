# Red Hat Labs Angular

## Setup

```bash
rhc create-app <app name> "http://cartreflect-claytondev.rhcloud.com/reflect?github=connyay/openshift-node-diy"
```

```bash
cd <app name>
```

```bash
git remote add upstream git@github.com:connyay/rh-labs-angular.git
```

```bash
git fetch upstream
```

```bash
git reset --hard upstream/master
```

```bash
git push origin -f
```

## Local Development

1. Setup [accesslabsproxy](https://github.com/connyay/accesslabsproxy).
2. In a terminal start the proxy with `accesslabsproxy`
3. In another terminal navigate to your apps directory and run the following commands
  - `npm install`
  - `bower install`
  - `grunt serve`
