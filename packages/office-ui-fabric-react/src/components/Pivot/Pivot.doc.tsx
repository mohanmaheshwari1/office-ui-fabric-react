import * as React from 'react';
import { PivotBasicExample } from './examples/Pivot.Basic.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { PivotIconCountExample } from './examples/Pivot.IconCount.Example';
import { PivotLargeExample } from './examples/Pivot.Large.Example';
import { PivotTabsExample } from './examples/Pivot.Tabs.Example';
import { PivotTabsLargeExample } from './examples/Pivot.TabsLarge.Example';
import { PivotFabricExample } from './examples/Pivot.Fabric.Example';
import { PivotOnChangeExample } from './examples/Pivot.OnChange.Example';
import { PivotRemoveExample } from './examples/Pivot.Remove.Example';
import { PivotOverrideExample } from './examples/Pivot.Override.Example';
import { PivotSeparateExample } from './examples/Pivot.Separate.Example';
import { PivotSeparateNoSelectedKeyExample } from './examples/Pivot.SeparateNoSelectedKey.Example';

const PivotRemoveExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Remove.Example.tsx') as string;
const PivotRemoveExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Remove.Example.tsx') as string;
const PivotBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Basic.Example.tsx') as string;
const PivotBasicExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Basic.Example.tsx') as string;
const PivotLargeExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Large.Example.tsx') as string;
const PivotLargeExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Large.Example.tsx') as string;
const PivotTabsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Tabs.Example.tsx') as string;
const PivotTabsExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Tabs.Example.tsx') as string;
const PivotTabsLargeExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.TabsLarge.Example.tsx') as string;
const PivotTabsLargeExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.TabsLarge.Example.tsx') as string;
const PivotFabricExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Fabric.Example.tsx') as string;
const PivotOnChangeExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.OnChange.Example.tsx') as string;
const PivotOnChangeExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.OnChange.Example.tsx') as string;
const PivotIconCountExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.IconCount.Example.tsx') as string;
const PivotIconCountExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.IconCount.Example.tsx') as string;
const PivotOverrideExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Override.Example.tsx') as string;
const PivotOverrideExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Override.Example.tsx') as string;
const PivotSeparateExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Separate.Example.tsx') as string;
const PivotSeparateExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Separate.Example.tsx') as string;
const PivotNoSelectedKeyExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.SeparateNoSelectedKey.Example.tsx') as string;
const PivotNoSelectedKeyExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.SeparateNoSelectedKey.Example.tsx') as string;

export const PivotPageProps: IDocPageProps = {
  title: 'Pivot',
  componentName: 'Pivot',
  componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Pivot',
  examples: [
    {
      title: 'Default Pivot',
      code: PivotBasicExampleCode,
      codepenJS: PivotBasicExampleCodepen,
      view: <PivotBasicExample />
    },
    {
      title: 'Count and Icon',
      code: PivotIconCountExampleCode,
      codepenJS: PivotIconCountExampleCodepen,
      view: <PivotIconCountExample />
    },
    {
      title: 'Large link size',
      code: PivotLargeExampleCode,
      codepenJS: PivotLargeExampleCodepen,
      view: <PivotLargeExample />
    },
    {
      title: 'Links of tab style',
      code: PivotTabsExampleCode,
      codepenJS: PivotTabsExampleCodepen,
      view: <PivotTabsExample />
    },
    {
      title: 'Links of large tab style',
      code: PivotTabsLargeExampleCode,
      codepenJS: PivotTabsLargeExampleCodepen,
      view: <PivotTabsLargeExample />
    },
    {
      title: 'Trigger onchange event',
      code: PivotOnChangeExampleCode,
      codepenJS: PivotOnChangeExampleCodepen,
      view: <PivotOnChangeExample />
    },
    {
      title: 'Rendering nested components within the Pivot',
      code: PivotFabricExampleCode,
      view: <PivotFabricExample />
    },
    {
      title: 'Show/Hide pivot item',
      code: PivotRemoveExampleCode,
      codepenJS: PivotRemoveExampleCodepen,
      view: <PivotRemoveExample />
    },
    {
      title: 'Override selected item',
      code: PivotOverrideExampleCode,
      codepenJS: PivotOverrideExampleCodepen,
      view: <PivotOverrideExample />
    },
    {
      title: 'Render content separately',
      code: PivotSeparateExampleCode,
      codepenJS: PivotSeparateExampleCodepen,
      view: <PivotSeparateExample />
    },
    {
      title: 'No pivots selected',
      code: PivotNoSelectedKeyExampleCode,
      codepenJS: PivotNoSelectedKeyExampleCodepen,
      view: <PivotSeparateNoSelectedKeyExample />
    }
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Pivot/docs/PivotOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Pivot/docs/PivotDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Pivot/docs/PivotDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativePropsForComponentName: 'PivotItem',
  allowNativeProps: true
};
