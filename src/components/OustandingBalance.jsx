
import { OutstandingBalanceCard } from "./OustandingBalanceCard"; 
export function OutstandingBalance({balanceCards}) {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 ">
            {balanceCards.map((cardData) => (
                <OutstandingBalanceCard
                    key={cardData.id}
                    title={cardData.title}
                    fullName={cardData.fullName}
                    endDate={cardData.dateEnd}
                    totalAmount={cardData.mount}
                    pendingAmount={cardData.balance}
                    status={cardData.state}
                    description={cardData.description}
                />
            ))}
        </div>
    );
}
