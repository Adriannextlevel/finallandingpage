
import React, { ReactNode } from 'react';
import { StarIcon } from './icons/StarIcon';

interface TestimonialCardProps {
  avatarUrl: string;
  name: string;
  handle: string;
  children: ReactNode;
}

const Stars: React.FC = () => (
    <div className="flex gap-0.5 text-yellow-400">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}
    </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatarUrl, name, handle, children }) => (
  <div className="bg-card p-6 rounded-xl shadow-lg space-y-4">
    <div className="flex items-center gap-4">
      <img className="h-12 w-12 rounded-full" src={avatarUrl} alt={name} />
      <div>
        <p className="font-bold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{handle}</p>
      </div>
    </div>
    <p className="text-muted-foreground leading-relaxed">"{children}"</p>
    <Stars />
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Loved by Creators, Makers, and Beginners</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how first-time builders are creating polished landing pages in record time:
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard avatarUrl="https://picsum.photos/id/1005/100/100" name="Sarah Johnson" handle="@sjohnson_dev">
            I had zero design or coding skills, but now I’ve launched three landing pages that look professionally made. The AI tools blew me away.
          </TestimonialCard>
          <TestimonialCard avatarUrl="https://picsum.photos/id/1011/100/100" name="Michael Chen" handle="@mchen_creates">
            This was faster than I imagined. I built my first landing page in 25 minutes flat — and it’s already collecting signups.
          </TestimonialCard>
          <TestimonialCard avatarUrl="https://picsum.photos/id/1027/100/100" name="Elena Rodriguez" handle="@elena_writes">
            As a non-technical founder, this course saved me time and money. I can launch pages without hiring anyone. Huge win.
          </TestimonialCard>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
