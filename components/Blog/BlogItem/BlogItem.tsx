import Link from 'next/link';
import React, { FC } from 'react';

export const PureBlogItem: FC<PureProps> = ({ id, title }) => (
  <li>
    <span>{id}: </span>
    <Link href={`/blog/${id}`}>
      <a
        className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200"
        href={`/blog/${id}`}
      >
        {title}
      </a>
    </Link>
  </li>
);

export const BlogItem: FC<Props> = ({ id, title }) => {
  return <PureBlogItem {...{ id, title }} />;
};

export type PureProps = Props;

export type Props = {
  id: number;
  title: string;
};
