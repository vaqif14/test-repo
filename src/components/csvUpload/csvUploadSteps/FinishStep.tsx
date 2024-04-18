import classNames from '@/src/app/utils/classNames';
import StepIndicator from '@/src/components/StepIndicator';
import { ArrowUpOnSquareStackIcon } from '@heroicons/react/24/outline';

interface UploadStep {
  step: number;
  setStep: (step: number) => void;
  submitBulkUpload(): any;
}

export default function FinishStep({ step, submitBulkUpload }: UploadStep) {
  return (
    <div className={classNames('flex')}>
      <StepIndicator step={step} thisStep={4} last={true} />
      <div className="w-full pl-4">
        <div className="flex items-center">
          <p
            className={classNames(
              'font-medium pt-1',
              step < 3 ? 'text-neutral-black-40 ' : 'text-neutral-black-100'
            )}
          >
            Finish
          </p>
        </div>

        {step === 3 && (
          <>
            <div className="mt-4 flex justify-between border-b-2 pb-2 text-neutral-black-100">
              <p>
                Create a patrol record with the tracks, observations, and photos
                organized on this page.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={submitBulkUpload}
                className="bg-primary-blue-100 py-5 px-7 text-neutral-black-02 rounded-md text-2xl font-semibold mt-8 flex items-center space-x-2"
              >
                <ArrowUpOnSquareStackIcon className="h-9 w-9 text-neutral-black-02" />
                <p>Create Patrol Record</p>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
