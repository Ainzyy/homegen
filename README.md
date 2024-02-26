# Homegen Web App

## Branches:

1. Main (master) Branch
   - This is the main branch where the source code always reflects a **production-ready state**.
   - All the code that is in this branch is code that is _tested_, _reviewed_, and _ready to be used_ by the users of your application.
2. Staging Branch
   - _Replica_ of the **production** environment.
   - Test changes from development branch.
   - If everything works as expected, you can merge the changes into the **master** branch.
3. Development Branch
   - This is where the actual work happens.
   - All development is done in this branch and when a feature or fix is finished, it gets merged into the **staging** branch.