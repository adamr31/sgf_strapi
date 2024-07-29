import React from 'react';

import { Box, CardAsset } from '@strapi/design-system';
import { styled } from 'styled-components';

import { AssetCardBase, AssetCardBaseProps } from './AssetCardBase';
import { AudioPreview } from './AudioPreview';

const AudioPreviewWrapper = styled(Box)`
  canvas,
  audio {
    display: block;
    max-width: 100%;
    max-height: ${({ size }) => (size === 'M' ? 16.4 : 8.8)}rem;
  }
`;

interface AudioAssetCardProps extends Omit<AssetCardBaseProps, 'variant'> {
  size?: 'S' | 'M';
  url: string;
}

export const AudioAssetCard = ({ name, url, size = 'M', ...restProps }: AudioAssetCardProps) => {
  return (
    <AssetCardBase name={name} {...restProps} variant="Audio">
      <CardAsset size={size}>
        <AudioPreviewWrapper size={size}>
          <AudioPreview url={url} alt={name} />
        </AudioPreviewWrapper>
      </CardAsset>
    </AssetCardBase>
  );
};
