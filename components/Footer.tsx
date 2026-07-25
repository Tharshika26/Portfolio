export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-background border-t border-border text-center">
      <div className="container mx-auto">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Tharshika Pathmanathan.
        </p>
      </div>
    </footer>
  );
}
