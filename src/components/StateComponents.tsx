

type LoadingProps = { message?: string };

export function LoadingState({ message = 'Chargement...' }: LoadingProps) {
  return (
    <div className="state-box loading-state">
      <div className="spinner" />
      <p>{message}</p>
    </div>
  );
}

type ErrorProps = {
  message: string;
  onRetry?: () => void;
};

export function ErrorState({ message, onRetry }: ErrorProps) {
  return (
    <div className="state-box error-state">
      <p className="state-emoji">⚠️</p>
      <p className="state-title">Une erreur est survenue</p>
      <p className="state-message">{message}</p>
      {onRetry && (
        <button className="btn-outline" onClick={onRetry}>
          🔄 Réessayer
        </button>
      )}
    </div>
  );
}

type EmptyProps = {
  emoji?:   string;
  title:    string;
  subtitle?: string;
};

export function EmptyState({ emoji = '📭', title, subtitle }: EmptyProps) {
  return (
    <div className="state-box empty-state">
      <p className="state-emoji">{emoji}</p>
      <p className="state-title">{title}</p>
      {subtitle && <p className="state-message">{subtitle}</p>}
    </div>
  );
}