import React from 'react';

interface ModalProps {
  modalHeader?: {
    topComponent?: React.ReactNode;
    title: string;
    titleSize?: 'sm' | 'md' | 'lg';
    message?: string;
  };
  modalBody?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  modalHeader,
  modalBody,
}: ModalProps) => {
  const regex = /<\*(.*?)\*>/g;
  const strong = '<strong>$1</strong>';

  const replacedTitle = modalHeader?.title?.replace(regex, strong);
  const replacedMessage = modalHeader?.message?.replace(regex, strong);

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-60 grid place-items-center overflow-auto">
      <div className="w-[668px] flex flex-col p-10 gap-10 bg-white rounded-lg h-max">
        {modalHeader && (
          <>
            {modalHeader.topComponent}

            <div className="flex flex-col gap-10 text-gray-900">
              <h5
                className={`text-center ${modalHeader.titleSize === 'lg' ? 'text-2xl font-bold' : modalHeader.titleSize === 'sm' ? 'text-lg font-semibold' : 'text-xl'}`}
                dangerouslySetInnerHTML={{
                  __html: replacedTitle || modalHeader.title,
                }}
              />
              {modalHeader?.message && (
                <p
                  className="text-sm text-gray-500 text-center"
                  dangerouslySetInnerHTML={{
                    __html: replacedMessage || modalHeader.message,
                  }}
                />
              )}
            </div>
          </>
        )}

        <div className="flex flex-col gap-10">{modalBody}</div>
      </div>
    </div>
  );
};
