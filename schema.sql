-- Create the user progress tracking table
create table if not exists public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  problem_id varchar not null,
  status varchar not null default 'Not Started',
  confidence int default 0,
  notes text default '',
  last_updated timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Prevent duplicate tracking rows per user-problem combo
  unique(user_id, problem_id)
);

-- Enable Row Level Security (RLS)
alter table public.user_progress enable row level security;

-- Policy: Allow users to view their own progress entries
create policy "Allow users to view their own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

-- Policy: Allow users to insert their own progress entries
create policy "Allow users to insert their own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

-- Policy: Allow users to update their own progress entries
create policy "Allow users to update their own progress"
  on public.user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Policy: Allow users to delete their own progress entries
create policy "Allow users to delete their own progress"
  on public.user_progress for delete
  using (auth.uid() = user_id);
