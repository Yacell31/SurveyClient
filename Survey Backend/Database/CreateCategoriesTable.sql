CREATE TABLE [dbo].[Categories]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [AvatarURL] NVARCHAR(50) NOT NULL, 
    [CreatedDate] DATETIME NULL, 
    [IsActive] BIT NULL
)
