CREATE TABLE public.user_progress (
  id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  completed_qs jsonb DEFAULT '[]'::jsonb,
  streak_count integer DEFAULT 0,
  last_activity_date text,
  updated_at timestamp with time zone,
  PRIMARY KEY (id)
);
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own progress" ON public.user_progress FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own progress" ON public.user_progress FOR ALL USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
