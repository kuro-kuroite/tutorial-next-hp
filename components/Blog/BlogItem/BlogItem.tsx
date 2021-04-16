import React, { FC } from 'react';

export const PureBlogItem: FC<Props> = ({ id, title }) => (
  <li>
    <span>{id} : </span>
    <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
      {title}
    </span>
  </li>
);

export const BlogItem: FC<Props> = ({ id, title }) => {
  return <PureBlogItem {...{ id, title }} />;
};

export type PureProps = {
  id: number;
  title: string;
};

export type Props = PureProps;
