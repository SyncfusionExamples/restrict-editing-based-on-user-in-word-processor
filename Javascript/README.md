# Document Editor

This example demonstrates document protection support in document editor to restrict the types of changes can be made to the document by a user/user group.To unprotect the document, use password '123'.

## Explanation

In this demo, the Document editor opens a protected document that includes permitted ranges for two users identified by email: each user is authorized to edit a separate text area.

You can switch between the current user to edit different parts by selecting dropdown list in User permissions pane.

User can add the user in dropdown who have editing permission in document by using addItem method.

The range that is enabled for the current user is highlighted.

You can disable the highlighting or customize its color using the corresponding demo’s elements.

## Step to run the sample

### Installing

We already configure the required packages in the `package.json` file.

You can run the below command to install all dependent packages related to this seed project.

```
npm install
```

### Running

You can use the below npm script to run the web application.

```
npm start
```
