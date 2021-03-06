/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { EuiButton } from '@elastic/eui';
import React from 'react';
// @ts-ignore
import { KibanaLink } from '../../utils/url';

export function SetupInstructionsLink({
  buttonFill = false
}: {
  buttonFill?: boolean;
}) {
  return (
    <KibanaLink pathname={'/app/kibana'} hash={'/home/tutorial/apm'}>
      <EuiButton size="s" color="primary" fill={buttonFill}>
        Setup Instructions
      </EuiButton>
    </KibanaLink>
  );
}
