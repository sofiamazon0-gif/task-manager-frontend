type AppFooterProps = {
  course: string;
};

export function AppFooter({ course }: AppFooterProps) {
  return <footer><small>{course}</small></footer>;
}
