enum Role {
    Admin = 'Admin',
    Moderator = 'Moderator',
    Member = 'Member',
    Guest = 'Guest'
}

enum Status {
    Active = 'Active',
    Inactive = 'Inactive',
    Suspended = 'Suspended',
    Pending = 'Pending'
}

interface User {
    id: number;
    username: string;
    email: string;
    role: Role;
    status: Status;
}

function canAccessAdminPanel(user: User): boolean {
    return user.status === Status.Active ? (user.role === Role.Admin || user.role === Role.Moderator ? true : false) : false;
}

function suspendInactiveUsers(users: User[]): User[] {
    return users.map(user => {
        if (user.status === Status.Inactive) {
            user.status = Status.Suspended;
        }
        return user;
    });
}

const users: User[] = [
    {
        id: 1,
        username: 'DanielDaGoat',
        email: 'danielfree927@gmail.com',
        role: Role.Admin,
        status: Status.Active
    },
    {
        id: 2,
        username: 'DerpNerdd',
        email: 'derpNerdd@yahoo.com',
        role: Role.Moderator,
        status: Status.Suspended
    },
    {
        id: 3,
        username: 'heyitsme.a',
        email: 'audreygeeha439@example.com',
        role: Role.Member,
        status: Status.Pending
    },
    {
        id: 4,
        username: 'sabrinatheTeenageWitch',
        email: 'salemRobot@msn.com',
        role: Role.Guest,
        status: Status.Inactive
    },
    {
        id: 5,
        username: 'NicoDaBest25',
        email: 'nicolas.m.diaz07@gmail.com',
        role: Role.Member,
        status: Status.Active
    }
];

for (const user of users) {
    console.log(`${user.username} can access admin panel: ${canAccessAdminPanel(user)}`);
}
console.log('Suspending inactive users...');
const updatedUsers = suspendInactiveUsers(users);
console.log('Updated users:', updatedUsers);

// Bonus
// Create a function to filter users by role
function filterUsersByRole(users: User[], role: Role): User[] {
    return users.filter(user => user.role === role);
}

console.log('Filtering users by role: Member');
const members = filterUsersByRole(users, Role.Member);
console.log(members);