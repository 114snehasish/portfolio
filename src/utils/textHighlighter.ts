import React, { ReactNode } from 'react';

/**
 * Utility function to render text with highlighted sections
 * Parses text with $highlighted$ syntax and returns an array of ReactNodes
 * where highlighted sections are wrapped in spans with text-secondary class
 *
 * @param text - The text string containing $highlight$ syntax
 * @returns Array of ReactNodes with highlighted sections
 */
export const renderHighlightedText = (text: string): ReactNode[] => {
  if (!text) return [];

  // Split the text by the delimiter pattern
  const parts = text.split(/\$(.*?)\$/);

  return parts.map((part, index) => {
    // Even indices are regular text, odd indices are highlighted text
    const isHighlighted = index % 2 !== 0;

    return isHighlighted
      ? React.createElement(
          'span',
          {
            key: `highlight-${index}`,
            className: 'text-secondary',
          },
          part
        )
      : part;
  });
};
