USE [Survey]
GO

CREATE TABLE [dbo].[Elements] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (50) NOT NULL,
    [ParentId]    INT           NULL,
    [Type]        NVARCHAR (50) NOT NULL,
	[CategoryId]  INT           NOT NULL,
	[CreatedDate] DATETIME      NULL,
    [IsActive]    BIT           NULL,
	 CONSTRAINT FK_ElementCategory FOREIGN KEY (CategoryId)
    REFERENCES Categories(Id),


);


