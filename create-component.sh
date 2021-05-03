#!/bin/bash
echo "Hello, what is the name of the Component?"
read component

echo "What category?"
read Category

echo "UIKit or Components?"
uikit_or_components="components"
# read uikit_or_components

echo "👉 creating a folder called: $component"
mkdir ./src/$uikit_or_components/$component
echo "✅ done"

echo "👉 creating a Component called: $component"
sed "s/TemplateComponent/$component/g" ./src/components/TemplateComponent/TemplateComponent.tsx >> "./src/$uikit_or_components/$component/$component.tsx"
echo "✅ done"

echo "👉 creating a CSS called: $component.css"
sed "s/TemplateComponent/$component/g" ./src/components/TemplateComponent/TemplateComponent.css >> "./src/$uikit_or_components/$component/$component.css"
sed "s/TemplateComponent/$component/g" ./src/components/TemplateComponent/TemplateComponent.responsive.css >> "./src/$uikit_or_components/$component/$component.responsive.css"
echo "✅ done"

echo "👉 creating a Story called: $component.stories.tsx"
sed -e "s/TemplateComponent/$component/g" -e "s/Category/$Category/g" ./src/components/TemplateComponent/TemplateComponent.stories.tsx  >> "./src/$uikit_or_components/$component/$component.stories.tsx"
echo "✅ done"

echo "👉 creating a Test called: $component.test.tsx"
sed "s/TemplateComponent/$component/g" ./src/components/TemplateComponent/TemplateComponent.test.tsx >> "./src/$uikit_or_components/$component/$component.test.tsx"
echo "✅ done"

echo "👉 creating a barrel file called: index.ts"
sed "s/TemplateComponent/$component/g" ./src/components/TemplateComponent/index.ts >> "./src/$uikit_or_components/$component/index.ts"
echo "✅ done"

# already exported...
echo "👉 update barrel file..."
echo "export * from './$component';"  >> "./src/$uikit_or_components/index.ts"

echo "✅ done"
