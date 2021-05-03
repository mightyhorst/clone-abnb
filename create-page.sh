#!/bin/bash
echo "Hello, what is the name of the Page?"
read component

echo "What category?"
read Category

echo "👉 creating a folder called: $page"
mkdir ./src/pages/$page
echo "✅ done"

echo "👉 creating a Page called: $page"
sed "s/TemplatePage/$page/g" ./src/pages/TemplatePage/TemplatePage.tsx >> "./src/$page/$page.tsx"
echo "✅ done"

echo "👉 creating a CSS called: $page.css"
sed "s/TemplatePage/$page/g" ./src/pages/TemplatePage/TemplatePage.css >> "./src/pages/$page/$page.css"
sed "s/TemplatePage/$page/g" ./src/pages/TemplatePage/TemplatePage.responsive.css >> "./src/pages/$page/$page.responsive.css"
echo "✅ done"

echo "👉 creating a Story called: $page.stories.tsx"
sed -e "s/TemplatePage/$page/g" -e "s/Category/$Category/g" ./src/pages/TemplatePage/TemplatePage.stories.tsx  >> "./src/pages/$page/$page.stories.tsx"
echo "✅ done"

echo "👉 creating a Test called: $page.test.tsx"
sed "s/TemplatePage/$page/g" ./src/pages/TemplatePage/TemplatePage.test.tsx >> "./src/pages/$page/$page.test.tsx"
echo "✅ done"

echo "👉 creating a barrel file called: index.ts"
sed "s/TemplatePage/$page/g" ./src/pages/TemplatePage/index.tsx >> "./src/pages/$page/index.ts"
echo "✅ done"

# already exported...
echo "👉 update barrel file..."
echo "export * from './$page';"  >> "./src/pages/index.ts"

echo "✅ done"
