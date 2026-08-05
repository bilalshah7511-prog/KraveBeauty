import { useEffect, useMemo, useRef, useState } from 'react';
import LottieImport from 'lottie-react';
import checkAnimation from '../assets/lottie/check.json';

const Lottie =
  typeof LottieImport === 'function'
    ? LottieImport
    : typeof LottieImport?.default === 'function'
      ? LottieImport.default
      : LottieImport?.default?.default || LottieImport?.LottiePlayer;

function cloneAnimation(data) {
  try {
    const cloned =
      typeof structuredClone === 'function'
        ? structuredClone(data)
        : JSON.parse(JSON.stringify(data));
    // Check strokes → black so they read on banner cream #eeeec8
    const paintBlack = (node) => {
      if (!node || typeof node !== 'object') return;
      if (Array.isArray(node)) {
        node.forEach(paintBlack);
        return;
      }
      if (node.c?.k && Array.isArray(node.c.k) && typeof node.c.k[0] === 'number') {
        node.c.k = [0, 0, 0, 1];
      }
      Object.values(node).forEach(paintBlack);
    };
    paintBlack(cloned);
    return cloned;
  } catch {
    return data;
  }
}

/** Slightly slower than video match — client asked to ease pace */
const LOGO_MS = 1700;
const LOGO_SETTLED_MS = 1350;
const CHECK_AT = LOGO_SETTLED_MS;

/**
 * Kosas checkout overlay (same animation as Outdoor Voices):
 * white → banner #eeeec8 BG + logo drop → Lottie check (no CSS spinner) → close
 */
export default function CheckoutLoader({
  open,
  brandLabel = 'KraveBeauty',
  logoSrc = '/krave-logo.svg',
  onDone,
}) {
  const [phase, setPhase] = useState('idle');
  const [brandIn, setBrandIn] = useState(false);
  const onDoneRef = useRef(onDone);
  const startedRef = useRef(false);
  const doneOnceRef = useRef(false);
  const lottieRef = useRef(null);
  onDoneRef.current = onDone;

  const checkData = useMemo(() => {
    if (phase !== 'check') return null;
    return cloneAnimation(checkAnimation);
  }, [phase]);

  function finishOnce() {
    if (doneOnceRef.current) return;
    doneOnceRef.current = true;
    onDoneRef.current?.();
  }

  useEffect(() => {
    if (!open) {
      startedRef.current = false;
      doneOnceRef.current = false;
      setPhase('idle');
      setBrandIn(false);
      return undefined;
    }

    if (startedRef.current) return undefined;
    startedRef.current = true;
    doneOnceRef.current = false;

    setPhase('brand');
    setBrandIn(false);

    let raf2 = 0;
    const startTimer = setTimeout(() => {
      raf2 = requestAnimationFrame(() => setBrandIn(true));
    }, 40);

    const tCheck = setTimeout(() => setPhase('check'), CHECK_AT);
    const tDone = setTimeout(() => finishOnce(), CHECK_AT + 4200);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(raf2);
      clearTimeout(tCheck);
      clearTimeout(tDone);
    };
  }, [open]);

  useEffect(() => {
    if (phase !== 'check') return undefined;
    const instance = lottieRef.current;
    if (instance && typeof instance.setSpeed === 'function') {
      try {
        instance.setSpeed(1.05);
      } catch {
        // ignore
      }
    }
    return undefined;
  }, [phase, checkData]);

  if (!open) return null;

  return (
    <div
      className={`checkout-loader${brandIn ? ' is-bg-in' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Processing checkout"
    >
      <div className="checkout-loader__center">
        <div className={`checkout-loader__brand${brandIn ? ' is-in' : ''}`}>
          <img
            className="checkout-loader__logo"
            src={logoSrc}
            alt={brandLabel}
          />
        </div>

        <div className={`checkout-loader__stage${phase === 'check' ? ' is-show' : ''}`}>
          {phase === 'check' && (
            <div className="checkout-loader__check is-in" aria-hidden="true">
              {typeof Lottie === 'function' && checkData ? (
                <Lottie
                  key="checkout-check"
                  lottieRef={lottieRef}
                  animationData={checkData}
                  loop={false}
                  autoplay
                  onComplete={finishOnce}
                  className="checkout-loader__lottie"
                />
              ) : (
                <svg className="checkout-loader__check-svg" viewBox="0 0 52 52" width="56" height="56">
                  <circle className="checkout-loader__check-circle" cx="26" cy="26" r="24" fill="none" />
                  <path
                    className="checkout-loader__check-tick"
                    fill="none"
                    d="M14.5 27.2l7.2 7.2 15.8-16.4"
                  />
                </svg>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
