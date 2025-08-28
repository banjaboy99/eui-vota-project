import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Camera, CheckCircle, XCircle, Eye, Shield, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const BiometricVerification = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'scanning' | 'success' | 'failed'>('idle');
  const [cameraReady, setCameraReady] = useState(false);

  // Initialize camera
  useEffect(() => {
    const initCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user'
          }
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          setStream(mediaStream);
          setCameraReady(true);
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        toast.error("Camera access denied. Please allow camera permissions and refresh.");
      }
    };

    initCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Cleanup stream on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const startLivenessScan = () => {
    if (!cameraReady) {
      toast.error("Camera is not ready. Please wait or check permissions.");
      return;
    }

    setIsScanning(true);
    setVerificationStatus('scanning');
    setScanProgress(0);

    // Simulate liveness detection progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          // Simulate random success/failure (90% success rate)
          const isSuccess = Math.random() > 0.1;
          
          setTimeout(() => {
            if (isSuccess) {
              setVerificationStatus('success');
              toast.success("Biometric verification successful!");
              setTimeout(() => {
                navigate("/dashboard");
              }, 2000);
            } else {
              setVerificationStatus('failed');
              toast.error("Liveness check failed. Please try again.");
              setTimeout(() => {
                resetVerification();
              }, 3000);
            }
            setIsScanning(false);
          }, 500);
          
          return 100;
        }
        return newProgress;
      });
    }, 300);
  };

  const resetVerification = () => {
    setVerificationStatus('idle');
    setScanProgress(0);
    setIsScanning(false);
  };

  const getStatusMessage = () => {
    switch (verificationStatus) {
      case 'scanning':
        return 'Scanning... Please look directly at the camera';
      case 'success':
        return 'Verification successful! Redirecting...';
      case 'failed':
        return 'Verification failed. Please try again.';
      default:
        return 'Position your face in the camera frame and click Start Verification';
    }
  };

  const getStatusIcon = () => {
    switch (verificationStatus) {
      case 'scanning':
        return <Eye className="w-6 h-6 text-primary animate-pulse" />;
      case 'success':
        return <CheckCircle className="w-6 h-6 text-success" />;
      case 'failed':
        return <XCircle className="w-6 h-6 text-destructive" />;
      default:
        return <Camera className="w-6 h-6 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 sm:py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div className="w-12 h-12 bg-blockchain-gradient rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Biometric Verification</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Liveness Check
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Complete the facial liveness verification to access your secure voting portal. 
                  This ensures only authorized students can participate in elections.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Card className="shadow-glow border-border">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center text-foreground">
                      Face Verification
                    </CardTitle>
                    <CardDescription className="text-center text-muted-foreground">
                      Look directly at the camera for biometric scanning
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="relative">
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden border-2 border-dashed border-border relative">
                        <video
                          ref={videoRef}
                          autoPlay
                          playsInline
                          muted
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Face detection overlay */}
                        <div className="absolute inset-4 border-2 border-primary rounded-lg opacity-50 pointer-events-none">
                          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
                        </div>

                        {!cameraReady && (
                          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                            <div className="text-center">
                              <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground">Initializing camera...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center justify-center space-x-2 p-4 bg-accent/10 rounded-lg">
                      {getStatusIcon()}
                      <span className="text-sm font-medium text-foreground">
                        {getStatusMessage()}
                      </span>
                    </div>

                    {/* Progress bar */}
                    {verificationStatus === 'scanning' && (
                      <div className="space-y-2">
                        <Progress value={scanProgress} className="w-full" />
                        <p className="text-xs text-center text-muted-foreground">
                          Scanning progress: {scanProgress}%
                        </p>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      {verificationStatus === 'idle' && (
                        <Button
                          onClick={startLivenessScan}
                          disabled={!cameraReady}
                          variant="hero"
                          size="lg"
                          className="flex-1"
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          Start Verification
                        </Button>
                      )}

                      {(verificationStatus === 'failed' || verificationStatus === 'success') && (
                        <Button
                          onClick={resetVerification}
                          variant="outline"
                          size="lg"
                          className="flex-1"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Try Again
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Advanced Liveness Detection
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Our biometric system uses advanced AI to detect real human presence, 
                      preventing spoofing attacks and ensuring election integrity.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blockchain-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Eye className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Real-time Detection</h3>
                        <p className="text-sm text-muted-foreground">
                          Advanced algorithms detect eye movement and facial micro-expressions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-success-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Anti-Spoofing</h3>
                        <p className="text-sm text-muted-foreground">
                          Protection against photos, videos, and deepfake attempts
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-lemon-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Camera className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Privacy Protected</h3>
                        <p className="text-sm text-muted-foreground">
                          Biometric data is processed locally and never stored permanently
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-foreground">Security Tips</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ensure good lighting on your face</li>
                      <li>• Remove sunglasses or face coverings</li>
                      <li>• Look directly at the camera</li>
                      <li>• Keep your face centered in the frame</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BiometricVerification;