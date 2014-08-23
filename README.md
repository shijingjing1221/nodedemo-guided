# Red Hat Labs Angular

## Usage

```bash
rhc create-app <app name> "http://cartreflect-claytondev.rhcloud.com/reflect?github=connyay/openshift-node-diy"
```

```bash
cd <app name>
```

```bash
git remote add rhc git@github.com:connyay/rh-labs-angular.git
```

```bash
git fetch rhc
```

```bash
git reset --hard rhc/master
```

```bash
git push origin -f
```
