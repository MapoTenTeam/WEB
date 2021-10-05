import { FC } from 'react';
import { RecruitPost } from '../../../interfaces';
import RecruitPostCard from './RecruitPostCard';

interface RecruitPostCardsProps {
  posts: RecruitPost[];
  mutate: any;
}

const RecruitPostCards: FC<RecruitPostCardsProps> = ({ posts, mutate }) => {
  return (
    <div className="flex flex-wrap flex-row -mx-2 mb-6">
      {posts.map((post) => {
        return <RecruitPostCard key={post.JOBID} post={post} mutate={mutate} />;
      })}
    </div>
  );
};

export default RecruitPostCards;
