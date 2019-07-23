import * as React from 'react';
import { CheckboxBasicExample } from './examples/Checkbox.Basic.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { CheckboxOtherExamples } from './examples/Checkbox.Other.Example';

const CheckboxBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Checkbox/examples/Checkbox.Basic.Example.tsx') as string;
const CheckboxBasicExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Checkbox/examples/Checkbox.Basic.Example.tsx') as string;
const CheckboxOtherExamplesCode = require('!raw-loader!office-ui-fabric-react/src/components/Checkbox/examples/Checkbox.Other.Example.tsx') as string;
const CheckboxOtherExamplesCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/Checkbox/examples/Checkbox.Other.Example.tsx') as string;

export const CheckboxPageProps: IDocPageProps = {
  title: 'Checkbox',
  componentName: 'Checkbox',
  componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Checkbox',
  examples: [
    {
      title: 'Default Checkbox',
      code: CheckboxBasicExampleCode,
      view: <CheckboxBasicExample />,
      codepenJS: CheckboxBasicExampleCodepen
    },
    {
      title: 'Implementation Examples',
      code: CheckboxOtherExamplesCode,
      view: <CheckboxOtherExamples />,
      codepenJS: CheckboxOtherExamplesCodepen
    }
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Checkbox/docs/CheckboxOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Checkbox/docs/CheckboxDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Checkbox/docs/CheckboxDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true
};
