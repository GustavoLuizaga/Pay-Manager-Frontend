
import { OutstandingBalanceCard } from "./OustandingBalanceCard"; 
export function OutstandingBalance({balanceCards}) {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {balanceCards.map((cardData, index) => (
                <OutstandingBalanceCard
                    key={index}
                    title={cardData.title}
                    fullName={cardData.fullName}
                    endDate={cardData.endDate}
                    totalAmount={cardData.totalAmount}
                    pendingAmount={cardData.pendingAmount}
                    status={cardData.status}
                    description={cardData.description}
                />
            ))}
        </div>
    );
}
